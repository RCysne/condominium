import { Button } from "@/components/ui/button";
import { InputField } from "@/app/components/Input/input";

export default function Login() {
  return (
    <div className="bg-gray-900 h-screen max-w-3xl mx-auto w-full">
      <form
        action=""
        className="w-full h-full flex flex-col justify-center items-center gap-6"
      >
        <h1 className=" text-gray-400">LOGIN</h1>
        <InputField>email</InputField>
        <InputField>senha</InputField>
        <Button className="max-w-[10rem] mt-2.5 border outline outline-amber-50">
          Clique Aqui
        </Button>
        <Button className="max-w-[10rem] border outline outline-amber-50">
          Esqueceu a senha.
        </Button>
      </form>
    </div>
  );
}
