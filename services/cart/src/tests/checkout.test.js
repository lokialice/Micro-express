/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../server');
const { prisma } = require('../../generated/prisma-client');

beforeEach(async (done) => {
  await prisma.deleteManyCartItems();
  done();
});

describe('Checkout the items for the payment', () => {
  it('Nominal case', async (done) => {
    const res = await request(app)
      .put('/cart/items/checkout');
    expect(res.statusCode).toEqual(204);
    cartItems = await prisma.cartItems();
    expect(cartItems.length).toEqual(0);
    done();
  });
});
