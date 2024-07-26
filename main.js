let s='^',w=s=>process.stdout.write(s);
for (let c of s) {
  if (c.charCodeAt(0) == 94) {
    w(s
      .replace(/\\/g, "\\\\")
      .replace(/\n/g, "\\n")
      .replace(/'/g, "\\'")
    )
  } else {
    w(c.replace(/\\/g, "\\"))
  }
}
