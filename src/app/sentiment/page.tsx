import { SentimentForm } from '@/app/sentiment/sentiment-form'

export default function Home() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-bold text-center text-gray-900 dark:text-white">Sentiment estimator</h1>
      <SentimentForm />
    </>
  );
}
