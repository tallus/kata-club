import unittest

BOOK_UNIT_PRICE = 8

class Basket:

    def __init__(self):
        self.count = 0

    def add(self, book):
        self.count += 1

    @property
    def price(self):
        return self.count * BOOK_UNIT_PRICE

class Book:
    price = BOOK_UNIT_PRICE

    def __init__(self, title):
        self.title = title

class TestSomething(unittest.TestCase):
    def test_one_book_costs_eight_euros(self):
        basket = Basket()
        basket.add(Book())
        self.assertEqual(basket.price, BOOK_UNIT_PRICE)
    
    def test_two_same_books_costs_16(self):
        basket = Basket()
        basket.add(Book())
        basket.add(Book())
        self.assertEqual(basket.price, 16)

    def test_two_different_books_costs_15_euros_20(self):
        basket = Basket()
        basket.add(Book('first'))
        basket.add(Book('goblet of fire'))
        self.assertEqual(basket.price, 15.2)