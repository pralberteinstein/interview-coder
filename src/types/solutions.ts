export interface Solution {
  code: string;
  thoughts: string[]; // Now contains the full LLM response as a single element
  time_complexity: string; // May be empty
  space_complexity: string; // May be empty
  debug_analysis?: string; // For debug mode
}

export interface SolutionsResponse {
  [key: string]: Solution
}

export interface ProblemStatementData {
  problem_statement: string
  input_format: {
    description: string
    parameters: any[]
  }
  output_format: {
    description: string
    type: string
    subtype: string
  }
  complexity: {
    time: string
    space: string
  }
  test_cases: any[]
  validation_type: string
  difficulty: string
}
