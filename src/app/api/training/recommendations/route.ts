import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { workoutType } = await req.json();

    // Define the schema for the response
    const workoutSchema = z.object({
      workout: z.object({
        type: z.string(),
        description: z.string(),
        steps: z.array(z.string()),
      }),
    });

    // Generate the workout using the AI SDK Core
    const { object } = await generateObject({
      model: openai('gpt-4-turbo'),
      schema: workoutSchema,
      prompt: `Generate a detailed workout plan for ${workoutType}.`,
    });

    // Return the generated workout
    return NextResponse.json(object);
  } catch (error) {
    console.error('Error generating workout:', error);
    return NextResponse.json({ error: 'Failed to generate workout' }, { status: 500 });
  }
}
