import { SignInFormSchema, SignUpFormSchema } from '@/types/auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import * as z from 'zod';
import ButtonPrimary from '../custom/button-gradient';
import { supabase } from '@/lib/supabase/db';
import { ClipLoader } from 'react-spinners';
import { useRecoilState } from 'recoil';
import { loginComponentState } from '@/recoil/store';

const Signup = () => {
  const [loginComponent, setLoginComponent] =
    useRecoilState(loginComponentState);

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: { email: '', password: '', confirmPassword: '' },
  });

  const isLoading = form.formState.isSubmitting;

  async function signUpNewUser({
    email,
    password,
  }: z.infer<typeof SignInFormSchema>) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: 'https://deskai-web.vercel.app/welcome',
      },
    });
    return { data, error };
  }

  const onSubmit = async ({
    email,
    password,
  }: z.infer<typeof SignInFormSchema>) => {
    const { error } = await signUpNewUser({ email, password });

    if (error) {
      form.reset();
      return;
    }

    // TODO: 메일확인 컴포넌트를 보여주는 상태변경
    // 컴포넌트도 만들어야함
  };

  return (
    <Form {...form}>
      <form className='p-10' onSubmit={form.handleSubmit(onSubmit)}>
        <div
          className='
          w-full
          flex
          justify-center
          items-center'
        >
          {/* <Image
            src={Logo}
            alt="cypress Logo"
            width={50}
            height={50}
          /> */}
          <span
            className='font-semibold
          text-4xl'
          >
            Desk-AI
          </span>
        </div>
        <FormDescription className='text-foreground/60 text-center'>
          컴퓨터 사용을 도와주는 우리의 비서
        </FormDescription>
        <div className='h-4' />
        <FormField
          disabled={isLoading}
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type='email' placeholder='이메일' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <div className='h-4' />

        <FormField
          disabled={isLoading}
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type='password' placeholder='비밀번호' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <div className='h-4' />

        <FormField
          disabled={isLoading}
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type='password' placeholder='비밀번호 확인' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='h-4' />

        <ButtonPrimary type='submit' className='w-full' disabled={isLoading}>
          {!isLoading ? (
            '회원가입'
          ) : (
            <ClipLoader color='hsla(168, 67%, 53%, 1)' size={20} />
          )}
        </ButtonPrimary>
        <div className='h-4' />

        <span className='flex text-sm'>
          <span className='mr-2'>이미 가입하셨나요 ?</span>
          <span
            className='text-primary hover:underline underline-offset-4 cursor-pointer'
            onClick={() => {
              setLoginComponent('signin');
            }}
          >
            로그인 하러가기
          </span>
        </span>
      </form>
    </Form>
  );
};

export default Signup;
