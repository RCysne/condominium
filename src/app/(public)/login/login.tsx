import { Button } from "@/components/ui/button";
import { InputField } from "@/app/components/Input/input";




export default function Login() {
    return (
        <div className="bg-gray-900 h-screen max-w-3xl mx-auto w-full">
            <form action="" className="w-full h-full flex flex-col justify-center items-center">
                <h1 className=" text-gray-400">PÁGINA DE LOGIN</h1>
                <InputField>Email</InputField>
                <InputField>Senha</InputField>
                <Button className="max-w-[14rem]">Clique Aqui</Button>
                <Button className="max-w-[10rem]">Esqueceu a senha.</Button>
            </form>

        </div>
    )
}