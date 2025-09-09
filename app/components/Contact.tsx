import { Section, H2 } from './ui/Section';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup
    .string()
    .required('Message is required')
    .min(50, 'Message must be at least 50 characters long')
});

export default function Contact() {
  type Inputs = {
    name: string;
    email: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const submitEnquiry = await fetch(
      'https://digital-showcase-62d4b-default-rtdb.asia-southeast1.firebasedatabase.app/enquiries.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : null
      }
    );
    if (submitEnquiry.ok) {
      // clear form
      reset();
      alert('Enquiry submitted successfully');
    } else {
      alert('Failed to submit enquiry');
    }
  };
  console.log(watch('name'));
  console.log(watch('email'));
  console.log(watch('message'));
  console.log(errors);
  return (
    <Section id="contact" className="bg-white text-zinc-900 py-16 md:py-20">
      <H2>Contact</H2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6 max-w-3xl">
        <div className="grid gap-2">
          <label className="text-sm" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="h-11 px-3 rounded-xl border border-zinc-300"
            placeholder="Your name"
            {...register('name', { required: true })}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>
        <div className="grid gap-2">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="h-11 px-3 rounded-xl border border-zinc-300"
            placeholder="you@example.com"
            {...register('email', { required: true })}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div className="md:col-span-2 grid gap-2">
          <label className="text-sm" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="p-3 rounded-xl border border-zinc-300"
            placeholder="Tell me about your project or role…"
            {...register('message', { required: true })}
          />
          {errors.message && <span className="text-red-500">{errors.message.message}</span>}
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-black text-white hover:bg-zinc-800">
            Send
          </button>
        </div>
      </form>
    </Section>
  );
}
