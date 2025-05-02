'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { getSentimentInfo } from '@/app/sentiment/actions'
import { Textarea } from '@/components/ui/textarea'

type Inputs = {
  text: string
}

export function SentimentForm() {
  const [response, setResponse] = useState<string>();

  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await getSentimentInfo(data.text);
    setResponse(response);
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="text" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Tweet
          </label>
          <Textarea
            id="text"
            placeholder="Enter text"
            {...register("text", { required: true })}
            className="w-full"
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          isLoading={isSubmitting}
        >
          Get Sentiment
        </Button>
      </form>

      {response && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md dark:bg-gray-700">
          <p className="text-gray-800 dark:text-gray-200">{response}</p>
        </div>
      )}
    </>
  )
}
