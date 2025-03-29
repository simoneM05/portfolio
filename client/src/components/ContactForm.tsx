import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const submitContact = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    try {
      await submitContact.mutateAsync(data);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input
            id="name"
            {...register('name')}
            className="w-full bg-dark border border-dark-border rounded-md p-3 text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full bg-dark border border-dark-border rounded-md p-3 text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Your email"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
        <input
          id="subject"
          {...register('subject')}
          className="w-full bg-dark border border-dark-border rounded-md p-3 text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Subject"
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          className="w-full bg-dark border border-dark-border rounded-md p-3 text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Your message"
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>
      
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary hover:bg-primary/90 text-white p-3 rounded-md font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <i className="fas fa-spinner fa-spin mr-2"></i> Sending...
          </>
        ) : (
          <>
            Send Message <i className="fas fa-paper-plane ml-2"></i>
          </>
        )}
      </button>
    </form>
  );
}

export default ContactForm;
