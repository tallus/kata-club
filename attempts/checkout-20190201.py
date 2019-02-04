

import unittest

class Tests(unittest.TestCase):

	def test_empty_basket_costs_nothing(self):
		basket = Basket() 
		self.assertEqual(basket.cost(),0)

	def test_basket_with_a_costs_50(self):
		basket = Basket()
		basket.add(Item("a"))
		self.assertEqual(basket.cost(), 50)

	def test_basket_with_two_as_costs_100(self):
		basket = Basket()
		basket.add(Item("a"))
		basket.add(Item("a"))
		self.assertEqual(basket.cost(), 100)

	def test_basket_with_one_b_costs_30(self):
		basket = Basket()
		basket.add(Item("b"))
		self.assertEqual(basket.cost(), 30)

	def test_basket_with_one_c_costs_20(self):
		basket = Basket()
		basket.add(Item("c"))
		self.assertEqual(basket.cost(), 20)

	def test_basket_with_one_d_costs_15(self):
		basket = Basket()
		basket.add(Item("d"))
		self.assertEqual(basket.cost(), 15)

	def test_basket_with_multiple_items_adds_up_cost(self):
		basket = Basket()
		basket.add(Item("a"))
		basket.add(Item("b"))
		self.assertEqual(basket.cost(), 80)

	def test_basket_with_two_bs_costs_45(self):
		basket = Basket()
		basket.add(Item("b"))
		basket.add(Item("b"))
		self.assertEqual(basket.cost(), 45)

	def test_basket_with_three_cs_costs_60(self):
		basket = Basket()
		basket.add(Item("c"))
		basket.add(Item("c"))
		basket.add(Item("c"))
		self.assertEqual(basket.cost(), 60)

	def test_basket_with_two_bs_and_a_costs_95(self):
		basket = Basket()
		basket.add(Item("b"))
		basket.add(Item("b"))
		basket.add(Item("a"))
		self.assertEqual(basket.cost(), 95)

	def test_basket_with_four_bs_costs_90(self):
		basket = Basket()
		basket.add(Item("b"))
		basket.add(Item("b"))
		basket.add(Item("b"))
		basket.add(Item("b"))
		self.assertEqual(basket.cost(), 90)


	def test_basket_with_three_bs_costs_75(self):
		basket = Basket()
		basket.add(Item("b"))
		basket.add(Item("b"))
		basket.add(Item("b"))
		self.assertEqual(basket.cost(), 75)

class Item(object):
	prices = {
		"a": 50,
		"b": 30,
		"c": 20,
		"d": 15
	}

	def __init__(self, sku):
		self.cost = self.prices[sku]
		self.sku = sku

	def __eq__(self, otherItem):
		return self.sku == otherItem.sku

class Basket (object):
	
	def __init__(self):
		self.items = []

	def add(self, item):
		self.items.append(item)

	def discount(self):
		numberOfBs = self.items.count(Item("b"))
		return 15 * (numberOfBs/2)

	def cost(self):
		total = 0
		for item in self.items:
			total += item.cost
		return total - self.discount()


if __name__ == "__main__":
	unittest.main()