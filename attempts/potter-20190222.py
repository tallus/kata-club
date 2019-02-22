import unittest

class Basket():
  def __init__(self):
    self._books = []

  def cost(self):
    return 8 * len(self._books) - self.discount()

  def discount(self):
    discount = 0
    if len(self._books) == 2 and self._books[0] != self._books[1]:
      discount = 0.8
    return discount

  def add(self, book):
    self._books.append(book)

class Tests(unittest.TestCase):
    def test_one_book_costs_8(self):
      book = "book1"
      basket = Basket()
      basket.add(book)
      self.assertEqual(8, basket.cost())

    def test_two_of_the_same_books_cost_16(self):
      book = "book1"
      basket = Basket()
      basket.add(book)
      basket.add(book)
      self.assertEqual(16, basket.cost())

    def test_two_different_books_cost(self):
      book1 = "book1"
      book2 = "book2"
      basket = Basket()
      basket.add(book1)
      basket.add(book2)
      self.assertEqual(15.20, basket.cost())
