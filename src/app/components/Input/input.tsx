import { Input } from "@/components/ui/input"

export function InputField({children}) {
    return <Input className="w-[30rem]" type={children} placeholder={children} />
}

