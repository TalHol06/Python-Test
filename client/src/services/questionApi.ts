import type { Question } from '../models/Question.js';

export const getQuestions = async (): Promise<Question[]> => {
  try {
    const apiURL = process.env.REACT_APP_API_URL || '';
    const response = await fetch(`${apiURL}/api/questions/random`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Question[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    throw error;
  }
};
