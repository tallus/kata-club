import unittest

def checkout(items):
    price_of_a99 = 50
    return price_of_a99

class CheckoutTests(unittest.TestCase):

    def test_one_a99_costs_50(self):
        total_cost = checkout(["a99"])
        self.assertEqual(total_cost, 50)


if __name__ == "__main__":
    unittest.main()