import unittest
from shop import open

class CheckoutTests(unittest.TestCase):
    def setUp(self):
        self.checkout = open()

    def test_scanning_item_a_costs_50(self):
        self.checkout.scan('a')
        self.assertEqual(self.checkout.total, 50)

    def test_scanning_item_b_costs_30(self):
        self.checkout.scan('b')
        self.assertEqual(self.checkout.total, 30)

    def test_scanning_item_c_costs_20(self):
        self.checkout.scan('c')
        self.assertEqual(self.checkout.total, 20)

    def test_scanning_item_d_costs_15(self):
        self.checkout.scan('d')
        self.assertEqual(self.checkout.total, 15)

    def test_scanning_two_items_adds_together_prices(self):
        self.checkout.scan('a')
        self.checkout.scan('b')
        price_for_a_and_b = sum([50, 30])
        self.assertEqual(self.checkout.total, price_for_a_and_b)
    
    def test_two_b_special_offer(self):
        self.checkout.scan('b')
        self.checkout.scan('b')
        self.assertEqual(self.checkout.total, 45)
    
    def test_three_a_special_offer(self):
        self.checkout.scan('a')
        self.checkout.scan('a')
        self.checkout.scan('a')
        self.assertEqual(self.checkout.total, 130)

    def test_four_a_special_offer(self):
        self.checkout.scan('a')
        self.checkout.scan('a')
        self.checkout.scan('a')
        self.checkout.scan('a')
        self.assertEqual(self.checkout.total, 180)

    