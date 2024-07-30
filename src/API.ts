// https://opentdb.com/api.php?amount=10&type=multiple

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {

    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    console.log(endpoint);

    const data = await (await fetch(endpoint)).json();
    return data;
}