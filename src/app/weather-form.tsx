'use client'

import { getWeatherInfo } from './actions'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type Inputs = {
  city: string
}

export function WeatherForm() {
  const [response, setResponse] = useState<string>();

  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const weather = await getWeatherInfo(data.city);
    setResponse(weather);
    reset();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-900 dark:text-white">Weather Information</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="city" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              City Name
            </label>
            <Input
              id="city"
              placeholder="Enter city name"
              {...register("city", { required: true })}
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            isLoading={isSubmitting}
          >
            Get Weather
          </Button>
        </form>

        {response && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md dark:bg-gray-700">
            <p className="text-gray-800 dark:text-gray-200">{response}</p>
          </div>
        )}
      </div>
    </div>
  )
}
