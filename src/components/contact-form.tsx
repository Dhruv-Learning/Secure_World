"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { handleContactForm, type FormState } from '@/app/actions';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { CheckCircle } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90">
      {pending ? 'Submitting...' : 'Get Quote'}
    </Button>
  );
}

const initialState: FormState = {
  message: '',
};

export function ContactForm() {
  const [state, formAction] = useActionState(handleContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.data) {
      toast({
        title: 'Error',
        description: state.message + (state.issues ? `\n- ${state.issues.join('\n- ')}` : ''),
        variant: 'destructive',
      });
    }
    if (state.message && state.data) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  if (state.data) {
    return (
      <Alert variant="default" className="border-green-500/50 text-green-500">
        <CheckCircle className="h-4 w-4 text-green-500" />
        <AlertTitle>Submission Successful!</AlertTitle>
        <AlertDescription>
          {state.message}
          <div className="mt-4 text-sm bg-muted/50 p-4 rounded-md text-foreground">
              <p className="font-semibold">Lead Analysis:</p>
              <p><strong className="text-muted-foreground">Category:</strong> {state.data.category}</p>
              <p><strong className="text-muted-foreground">Urgency:</strong> {state.data.urgency}</p>
              <p><strong className="text-muted-foreground">Approach:</strong> {state.data.approach}</p>
          </div>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <form ref={formRef} action={formAction}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="John Doe" required defaultValue={state.fields?.name} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" placeholder="(123) 456-7890" required defaultValue={state.fields?.phone} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required defaultValue={state.fields?.email} />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="requirement">Security Requirement</Label>
          <Textarea id="requirement" name="requirement" placeholder="Please describe your security needs..." required rows={4} defaultValue={state.fields?.requirement} />
           {state.issues && (
            <p className="text-sm text-destructive">{state.issues.join(', ')}</p>
          )}
        </div>
        <SubmitButton />
      </div>
    </form>
  );
}
