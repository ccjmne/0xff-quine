Revisions: 2                     Some JS Quine                      Éric Nicolas
Latest: 2024-04-26   

There is nothing special here, just a JavaScript Quine that doesn't employ any
trickery to introspect its own code or escape its "data".

    The main code belongs in `main.js`.  It essentially consists of an immensely
    basic interpreter that receives and input and consumes it byte by byte.
    For each byte, it pretty much spits it back to its standard output, unless
    it recognises one special marker (here ^, a caret), which it'll handle by
    printing out an escaped version of the entire input.

    There is an extra step to preparing the quine, that of incorporating its
    input data as part of its code: the `compile.js` script shall take care of
    this task.

    The quine is compiled to the file called `out`, which is precisely 300 bytes
    long.  It is meant to be interpreted with Node.js.

To ascertain the validity of the quine, one may compare the contents of `out` to
that of the output of `node out`, for which I recommend the GNU `sha???sum` or
`diff` utilities.

    Although that test in itself doesn't attest to the exactitude of the quine,
    I like the idea of feeding a couple of generations of the original script
    through the interpreter:

        node out | node - | node - | node - | node -

In its current shape, there is not much of interest here.  It would be possible
to realise something more aesthetically pleasing in its output, especially by
leveraging JavaScript's template literals, and that may be something to be
explored in the future.

vim: textwidth=80 expandtab shiftwidth=4 smarttab
