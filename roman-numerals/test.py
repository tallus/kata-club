import unittest
from main import roman_numeral

class TestRomanNumerals(unittest.TestCase):

    def is_integer_and_numeral_equal(self, integer, roman):
        result = roman_numeral(integer)
        self.assertEqual(result, roman)
    
    def test_1_coverts_to_I(self):
        self.is_integer_and_numeral_equal(1, 'I')

    def test_2_coverts_to_II(self):
        self.is_integer_and_numeral_equal(2, 'II')
        
    
    def test_4_converts_to_IV(self):
        self.is_integer_and_numeral_equal(4, 'IV')


    def test_5_converts_to_V(self):
        self.is_integer_and_numeral_equal(5, 'V')


    def test_7_converts_to_VII(self):
        self.is_integer_and_numeral_equal(7, 'VII')
        










if __name__ == '__main__':
    unittest.main()