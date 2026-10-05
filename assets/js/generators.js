/* Procedural question generators – these give "endless" numeric and code questions.
   Each generator: (rng, type) -> authored item ({q, o:[correct,...]} for mcq, {q, m, exact} for short) */
(function () {
  'use strict';
  const CS = window.CS; const G = CS.gens;

  const bin8 = n => n.toString(2).padStart(8, '0');
  function uniqOpts(correct, wrongs, rng, make) {
    const set = [String(correct)];
    wrongs.forEach(w => { w = String(w); if (!set.includes(w)) set.push(w); });
    let guard = 0;
    while (set.length < 4 && guard++ < 50) { const w = String(make()); if (!set.includes(w)) set.push(w); }
    return set.slice(0, 4);
  }
  const places = '128, 64, 32, 16, 8, 4, 2, 1';

  /* ---------- Binary ---------- */
  G.binToDen = (r, t) => {
    const n = r.int(9, 250), b = bin8(n);
    const working = b.split('').map((d, i) => d === '1' ? 128 >> i : 0).filter(Boolean).join(' + ');
    const model = `${working} = ${n}`;
    if (t === 'mcq') return {
      q: `What is the binary number \`${b}\` in denary?`,
      o: uniqOpts(n, [n + 1, n - 1, parseInt(b.split('').reverse().join(''), 2), n ^ 16], r, () => r.int(1, 255)),
      x: `Add the place values (${places}) where there is a 1: ${model}.`
    };
    return { q: `Convert the 8-bit binary number \`${b}\` into denary. Show your working.`, m: 2, exact: [String(n)], numeric: true, a: model };
  };

  G.denToBin = (r, t) => {
    const n = r.int(5, 250), b = bin8(n);
    if (t === 'mcq') return {
      q: `Which 8-bit binary number is equal to denary **${n}**?`,
      o: uniqOpts(b, [bin8(n ^ 1), bin8(n ^ 32), b.split('').reverse().join(''), bin8((n + 2) % 256)], r, () => bin8(r.int(1, 255))),
      x: `Start at 128 and work right: write 1 if the place value fits and subtract it. ${n} = ${b}.`
    };
    return { q: `Convert the denary number **${n}** into 8-bit binary.`, m: 2, exact: [b], binary: true, a: `${b} (check: ${b.split('').map((d, i) => d === '1' ? 128 >> i : 0).filter(Boolean).join(' + ')} = ${n})` };
  };

  G.binAdd = (r, t) => {
    const a = r.int(10, 120), b = r.int(10, 120), s = a + b;
    const A = bin8(a), B = bin8(b), S = bin8(s);
    if (t === 'mcq') return {
      q: `Add these two 8-bit binary numbers:\n\`${A}\` + \`${B}\``,
      o: uniqOpts(S, [bin8(a | b), bin8((s + 2) % 256), bin8(s ^ 4)], r, () => bin8(r.int(1, 255))),
      x: `${A} (${a}) + ${B} (${b}) = ${S} (${s}). Remember 1 + 1 = 10 (write 0, carry 1).`
    };
    return { q: `Add the binary numbers \`${A}\` and \`${B}\`. Give your answer as an 8-bit binary number.`, m: 2, exact: [S], binary: true, a: `${S} (${a} + ${b} = ${s})` };
  };

  G.overflow = (r) => {
    const over = [r.int(140, 250), r.int(140, 250)];
    const fine = [0, 1, 2].map(() => { const x = r.int(10, 100); return [x, r.int(10, 255 - x - 10)]; });
    const f = p => `\`${bin8(p[0])}\` + \`${bin8(p[1])}\``;
    return {
      q: 'Which of these 8-bit binary additions would cause an **overflow error**?',
      o: [f(over), ...fine.map(f)],
      x: `${over[0]} + ${over[1]} = ${over[0] + over[1]}, which is more than 255 – the largest number 8 bits can hold – so a 9th bit is needed.`
    };
  };

  G.dataUnits = (r, t) => {
    const kinds = [
      () => { const n = r.int(2, 12); return [`How many bits are there in ${n} bytes?`, n * 8, `1 byte = 8 bits, so ${n} × 8 = ${n * 8}.`]; },
      () => { const n = r.int(2, 12); return [`How many nibbles are there in ${n} bytes?`, n * 2, `1 byte = 2 nibbles, so ${n} × 2 = ${n * 2}.`]; },
      () => { const n = r.int(2, 9); return [`How many bits are there in ${n} nibbles?`, n * 4, `1 nibble = 4 bits, so ${n} × 4 = ${n * 4}.`]; },
      () => { const n = r.int(2, 8); return [`How many kilobytes (KB) are there in ${n} megabytes (MB)?`, n * 1024, `1 MB = 1,024 KB, so ${n} × 1024 = ${n * 1024}.`]; },
      () => { const n = r.int(2, 6); return [`How many megabytes (MB) are there in ${n} gigabytes (GB)?`, n * 1024, `1 GB = 1,024 MB, so ${n} × 1024 = ${n * 1024}.`]; },
      () => { const n = r.int(2, 16) * 8; return [`How many bytes are there in ${n} bits?`, n / 8, `Divide by 8: ${n} ÷ 8 = ${n / 8}.`]; }
    ];
    const [q, ans, x] = r.pick(kinds)();
    if (t === 'mcq') return { q, o: uniqOpts(ans, [ans * 2, Math.round(ans / 2), ans + 8], r, () => ans + r.int(1, 20)), x };
    return { q, m: 2, exact: [String(ans)], numeric: true, a: x };
  };

  /* ---------- Hardware ---------- */
  G.clockSpeed = (r) => {
    const ghz = r.pick([1.8, 2.0, 2.4, 2.8, 3.0, 3.2, 3.6, 4.0]);
    const cyc = Math.round(ghz * 1e9);
    const fmt = n => n.toLocaleString('en-GB');
    return {
      q: `A CPU has a clock speed of **${ghz} GHz**. About how many cycles (instructions) can it carry out each second?`,
      o: [fmt(cyc), fmt(cyc / 1000), fmt(cyc / 1e6), String(ghz)],
      x: `1 GHz = 1 billion (1,000,000,000) cycles per second, so ${ghz} GHz ≈ ${fmt(cyc)}.`
    };
  };

  /* ---------- Graphics (Y8) ---------- */
  G.colourDepth = (r, t) => {
    const bits = r.int(1, 8), cols = 2 ** bits;
    if (r() < 0.5) {
      const q = `An image has a colour depth of **${bits} bit${bits > 1 ? 's' : ''}**. How many different colours can each pixel be?`;
      if (t === 'mcq') return { q, o: uniqOpts(cols, [bits * 2, cols * 2, cols - 1], r, () => r.int(2, 300)), x: `Number of colours = 2 to the power of the colour depth: 2^${bits} = ${cols}.` };
      return { q, m: 2, exact: [String(cols)], numeric: true, a: `2^${bits} = ${cols} colours` };
    }
    const q = `An image needs to use **${cols} colours**. What is the minimum colour depth (bits per pixel) needed?`;
    if (t === 'mcq') return { q, o: uniqOpts(bits, [bits + 1, cols / 2, bits * 2], r, () => r.int(1, 12)), x: `Find the power of 2: 2^${bits} = ${cols}, so ${bits} bits are needed.` };
    return { q, m: 2, exact: [String(bits)], numeric: true, a: `2^${bits} = ${cols}, so ${bits} bits` };
  };

  G.imageSize = (r, t) => {
    const w = r.pick([4, 5, 8, 10, 12, 16, 20, 25, 32, 40, 50, 64]);
    const h = r.pick([4, 5, 8, 10, 12, 16, 20, 30, 32]);
    const d = r.pick([1, 2, 4, 8, 16, 24]);
    const bits = w * h * d;
    const inBytes = bits % 8 === 0 && r() < 0.4;
    const ans = inBytes ? bits / 8 : bits;
    const q = `An image is **${w} × ${h} pixels** with a colour depth of **${d} bit${d > 1 ? 's' : ''}**. Calculate the file size in **${inBytes ? 'bytes' : 'bits'}**.`;
    const x = `File size = width × height × colour depth = ${w} × ${h} × ${d} = ${bits} bits${inBytes ? `; ÷ 8 = ${bits / 8} bytes` : ''}.`;
    if (t === 'mcq') return { q, o: uniqOpts(ans, [w * h, inBytes ? bits : bits / 8, w * h * (d + 1)], r, () => ans + r.int(1, 99)), x };
    return { q: q + ' Show your working.', m: 2, exact: [String(ans)], numeric: true, a: x };
  };

  /* ---------- Spreadsheets (Y8) ---------- */
  G.sheetFn = (r, t) => {
    const col = r.pick(['A', 'B', 'C', 'D']);
    const n = r.int(4, 6);
    const vals = Array.from({ length: n }, () => r.int(2, 60));
    const table = vals.map((v, i) => `${col}${i + 1}: ${v}`).join('    ');
    const sum = vals.reduce((a, b) => a + b, 0);
    const fns = [
      ['SUM', sum],
      ['MAX', Math.max(...vals)],
      ['MIN', Math.min(...vals)],
      ['AVERAGE', Math.round((sum / n) * 100) / 100]
    ];
    let [fn, ans] = r.pick(fns);
    let formula = `=${fn}(${col}1:${col}${n})`;
    if (r() < 0.25) { formula = `=${col}1*${col}2`; ans = vals[0] * vals[1]; fn = 'multiply'; }
    else if (r() < 0.2) { formula = `=${col}1+${col}2-${col}3`; ans = vals[0] + vals[1] - vals[2]; fn = 'formula'; }
    const q = `A spreadsheet contains these values:\n\`${table}\`\nWhat will the formula \`${formula}\` display?`;
    const x = `${formula} → ${ans}.`;
    if (t === 'mcq') return { q, o: uniqOpts(ans, [sum, Math.max(...vals), Math.min(...vals), vals.length], r, () => ans + r.int(1, 20)), x };
    return { q, m: 2, exact: [String(ans)], numeric: true, a: x };
  };

  /* ---------- Enterprise (Y9) ---------- */
  G.profit = (r, t) => {
    const item = r.pick(['cupcakes', 'bookmarks', 'keychains', 'bottles of juice', 'badges', 'phone cases', 'popcorn bags']);
    const price = r.pick([2, 3, 4, 5, 6, 8, 10, 12, 15]);
    const qty = r.pick([20, 25, 30, 40, 50, 60, 80, 100]);
    const rev = price * qty;
    const costs = Math.round(rev * r.pick([0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1.1]) / 5) * 5;
    const profit = rev - costs;
    const q = `A school enterprise sells **${qty} ${item}** at **QAR ${price}** each. Their total costs are **QAR ${costs}**. Calculate the ${profit < 0 ? 'profit or loss' : 'profit'}.`;
    const x = `Revenue = price × quantity = ${price} × ${qty} = QAR ${rev}. Profit = revenue − costs = ${rev} − ${costs} = QAR ${profit}${profit < 0 ? ' (a loss)' : ''}.`;
    if (t === 'mcq') return { q, o: uniqOpts(`QAR ${profit}`, [`QAR ${rev}`, `QAR ${rev + costs}`, `QAR ${costs}`], r, () => `QAR ${profit + r.int(5, 50)}`), x };
    return { q: q + ' Show your working.', m: 2, exact: [String(profit), 'QAR ' + profit, profit + ' QAR'], numeric: true, a: x };
  };

  /* ---------- Python ---------- */
  const names = ['Ali', 'Sara', 'Omar', 'Mariam', 'Yusuf', 'Noor', 'Hamad', 'Aisha', 'Khalid', 'Fatima'];
  const vars = ['a', 'b', 'x', 'y', 'num', 'total', 'score', 'price'];

  G.pyArith = (r, t) => {
    const [v1, v2] = r.sample(vars, 2);
    const a = r.int(3, 20), b = r.int(2, 9);
    const ops = [['+', a + b], ['-', a - b], ['*', a * b]];
    if (r() < 0.4) ops.push(['//', Math.floor(a / b)], ['%', a % b]);
    const [op, ans] = r.pick(ops);
    const c = `${v1} = ${a}\n${v2} = ${b}\nprint(${v1} ${op} ${v2})`;
    const opName = { '+': 'adds', '-': 'subtracts', '*': 'multiplies', '//': 'divides and rounds down (integer division)', '%': 'gives the remainder (modulus)' }[op];
    if (t === 'mcq') return { q: 'What will this Python program output?', c, o: uniqOpts(ans, [`${v1} ${op} ${v2}`, a + b === ans ? a * b : a + b, `${a}${b}`], r, () => ans + r.int(1, 9)), x: `\`${op}\` ${opName}: ${a} ${op} ${b} = ${ans}.` };
    return { q: 'What will this Python program output?', c, m: 2, exact: [String(ans)], numeric: true, a: `${ans} – because \`${op}\` ${opName}.` };
  };

  G.pyStr = (r, t) => {
    const n = r.pick(names);
    const greet = r.pick(['Hello', 'Welcome', 'Hi', 'Good morning']);
    const c = `name = "${n}"\nprint("${greet} " + name)`;
    const ans = `${greet} ${n}`;
    if (t === 'mcq') return { q: 'What will this Python program output?', c, o: [ans, `${greet} name`, `"${greet} " + name`, `${greet}${n}`], x: 'The + joins (concatenates) the two strings. The variable name is replaced by its value.' };
    return { q: 'What will this Python program output?', c, m: 2, exact: [ans], a: ans };
  };

  G.pyType = (r) => {
    const items = [
      [`"${r.pick(names)}"`, 'String'], [String(r.int(2, 99)), 'Integer'], [`${r.int(1, 20)}.${r.int(1, 9)}`, 'Float'],
      [r.pick(['True', 'False']), 'Boolean'], [`"${r.int(10, 99)}"`, 'String'], [`-${r.int(1, 30)}`, 'Integer']
    ];
    const [val, type] = r.pick(items);
    const v = r.pick(vars);
    return {
      q: `Which data type is stored in this variable?`, c: `${v} = ${val}`,
      o: [type, ...['String', 'Integer', 'Float', 'Boolean'].filter(x => x !== type)],
      x: { String: 'Text inside quotation marks is a string – even if it looks like a number.', Integer: 'A whole number with no decimal point is an integer.', Float: 'A number with a decimal point is a float.', Boolean: 'True and False (no quotes) are Boolean values.' }[type]
    };
  };

  G.pyIf = (r, t) => {
    const hi = r.pick([70, 75, 80]), lo = r.pick([40, 50]);
    const s = r.int(20, 99);
    const c = `score = ${s}\nif score >= ${hi}:\n    print("Grade A")\nelif score >= ${lo}:\n    print("Grade B")\nelse:\n    print("Grade C")`;
    const ans = s >= hi ? 'Grade A' : s >= lo ? 'Grade B' : 'Grade C';
    const x = `${s} >= ${hi} is ${s >= hi ? 'True' : 'False'}${s >= hi ? '' : `; ${s} >= ${lo} is ${s >= lo ? 'True' : 'False'}`} → ${ans}. Only the first true branch runs.`;
    if (t === 'mcq') return { q: 'What will this program output?', c, o: [ans, ...['Grade A', 'Grade B', 'Grade C'].filter(g => g !== ans), 'Grade A\nGrade B'.replace('\n', ' and ')], x };
    return { q: 'What will this program output?', c, m: 2, exact: [ans], a: x };
  };

  G.pyIfElse = (r, t) => {
    const lim = r.pick([10, 18, 30, 50, 100]);
    const v = r.int(lim - 8, lim + 8);
    const op = r.pick(['>', '>=', '<', '==', '!=']);
    const res = { '>': v > lim, '>=': v >= lim, '<': v < lim, '==': v === lim, '!=': v !== lim }[op];
    const [yes, no] = r.pick([['Access granted', 'Access denied'], ['Hot day', 'Normal day'], ['Pass', 'Fail'], ['Adult', 'Child'], ['Big number', 'Small number']]);
    const c = `value = ${v}\nif value ${op} ${lim}:\n    print("${yes}")\nelse:\n    print("${no}")`;
    const ans = res ? yes : no;
    const x = `${v} ${op} ${lim} is ${res ? 'True' : 'False'}, so the ${res ? 'if' : 'else'} branch runs.`;
    if (t === 'mcq') return { q: 'What will this program output?', c, o: [ans, res ? no : yes, `${yes} ${no}`, 'Nothing is printed'], x };
    return { q: 'What will this program output?', c, m: 2, exact: [ans], a: x };
  };

  G.pyWhile = (r, t) => {
    const start = r.int(0, 3), end = start + r.int(2, 4), step = r.pick([1, 1, 2]);
    const out = []; for (let i = start; i <= end; i += step) out.push(i);
    const c = `count = ${start}\nwhile count <= ${end}:\n    print(count)\n    count = count + ${step}`;
    const ans = out.join(' ');
    const x = `The loop prints count, then adds ${step}, and stops when count is greater than ${end}. Output (one per line): ${out.join(', ')}.`;
    const wrong1 = out.slice(0, -1).join(' ') || String(start - 1);
    const wrong2 = out.concat(out[out.length - 1] + step).join(' ');
    if (t === 'mcq') return { q: 'What numbers will this program print (one per line)?', c, o: [ans, wrong1, wrong2, out.map(n => n + step).join(' ')], x };
    return { q: 'What numbers will this program print? Write them separated by spaces.', c, m: 2, exact: [ans, out.join(','), out.join(', '), out.join('\n')], a: x };
  };
})();
