const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index');
const Book = require('../models/Book');

const sampleBook = {
  title: 'Test Book',
  author: 'Vibhav',
  description: 'This is a test book.'
};

let createdBookId;

beforeAll(async () => {
  const dbURI =
    process.env.NODE_ENV === 'test'
      ? process.env.MONGO_URI_TEST
      : process.env.MONGO_URI;

  await mongoose.connect(dbURI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await Book.deleteMany();
});

describe('📚 Book API - CRUD Tests', () => {
  it('GET /api/books should return 200 and an array', async () => {
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/books should create a book and return 201', async () => {
    const res = await request(app).post('/api/books').send(sampleBook);
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe(sampleBook.title);
    createdBookId = res.body._id;
  });

  it('PUT /api/books/:id should update the book', async () => {
    const newTitle = 'Updated Test Book';
    const book = new Book(sampleBook);
    await book.save();

    const res = await request(app)
      .put(`/api/books/${book._id}`)
      .send({ title: newTitle });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(newTitle);
  });

  it('DELETE /api/books/:id should delete the book', async () => {
    const book = new Book(sampleBook);
    await book.save();

    const res = await request(app).delete(`/api/books/${book._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/deleted/i);
  });
});
