// Data loading, parsing, and query utilities

export class DataManager {
  constructor() {
    this.questions = [];
    this.categories = [];
    this.corpus = null;
    this.isLoaded = false;
  }

  async init() {
    if (this.isLoaded) return;
    try {
      const [qRes, cRes] = await Promise.all([
        fetch('data/questions/middle_korean_500.json'),
        fetch('data/linguistics/middle_korean_corpus.json'),
      ]);

      const qData = await qRes.json();
      const cData = await cRes.json();

      this.questions = qData.questions || [];
      this.categories = qData.categories || [];
      this.corpus = cData || null;
      this.isLoaded = true;
    } catch (err) {
      console.error('Failed to load linguistic datasets:', err);
    }
  }

  getAllQuestions() {
    return this.questions;
  }

  getQuestionById(id) {
    return this.questions.find((q) => q.id === id);
  }

  getCategories() {
    return this.categories;
  }

  getByCategory(category) {
    if (!category || category === 'all') return this.questions;
    return this.questions.filter((q) => q.category === category);
  }

  getRandomSample(count = 20, category = null) {
    const pool = category ? this.getByCategory(category) : [...this.questions];
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  searchQuestions(query, category = 'all') {
    const base = this.getByCategory(category);
    if (!query || !query.trim()) return base;
    const q = query.trim().toLowerCase();
    return base.filter((item) => {
      return (
        item.question.toLowerCase().includes(q) ||
        item.explanation.toLowerCase().includes(q) ||
        item.subcategory.toLowerCase().includes(q) ||
        item.options.some((opt) => opt.toLowerCase().includes(q))
      );
    });
  }

  getCorpus() {
    return this.corpus;
  }
}

export const dataManager = new DataManager();
