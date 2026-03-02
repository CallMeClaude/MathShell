export const help = "vi FILE\n  Text editor (alias for nano in MASH).\n  Usage is identical to nano — opens the file for editing.\n";
export default function vi(args, ctx) {
  // Delegate to nano via the shell dispatcher so edits to /bin/nano are respected
  return ctx.execCmd("nano", args, ctx.stdin, ctx.vfs, ctx.sh);
}
