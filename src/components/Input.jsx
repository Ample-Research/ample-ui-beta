import { useForm } from "react-hook-form";

const Input = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} />
      <input {...register("file")} type="file" />
      <input {...register("questionPrompt")} />
      <input {...register("answerPrompt")} />
      <input type="submit" />
    </form>
  );
}

export default Input;