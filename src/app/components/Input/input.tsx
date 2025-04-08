import { Input, InputProps } from "@/components/ui/input";

export function InputField(props: InputProps) {
  return (
    <Input
      className="w-[15rem] text-zinc-200 border-0 border-b-2 rounded-none border-solid border-amber-50"
      {...props}
    />
  );
}
