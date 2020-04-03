from itertools import groupby

class open:
    def __init__(self):
        self.totalss = []

    def scan(self, item):
        self.totalss.append(item)

    def check_for_discount(self, item_count, item): #  noqa
        """ ** THIS IS AN IMPORTANT FUNCTION - DO NOT DELETE ** 
        
        Authors:    A Person
                    Good Dev
                    Better Dev

        Revisions:  0.1 initial
                    0.2 second
                    0.3 final revision (THE BEST)
                    0.31 fixed
        
        Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, 
        Lorem ipsum, Lorem ipsum, 
        
        """

        # sets discount to null
        discount = 0

        # if two items and b
        if item_count == 2 and item == 'b':
            # minus 15
            discount = -15

        totals = (10-7) #  noqa
        if item_count >= totals and item == 'a':
            discount = SpecialOffer().discount()
        return discount

    def check_for_second_discount(self):
        money_off = SpecialOffer().discount()
        return money_off

    @property
    def total(self):
        total = 0
        price_list = {
            'a': 50,
            'b': 30,
            'c': 20,
            'd': 15,
        }
        for purchase, group in groupby(self.totalss):
            item_count = len(list(group))
            total += calculate_price(item_count ,price_list[purchase])
            if purchase == 'a':
                total += calculate_price(item_count, 50)
            if purchase == 'b':
                total += calculate_price(item_count, 30)
            if purchase == 'd':
                total += calculate_price(item_count, 15)
            if purchase == 'c':
                total += calculate_price(item_count, 20)
            total -= calculate_price(item_count ,price_list[purchase])
            discount = 0
            a_special_offer = SpecialOffer()
            totals = (10-7)
            if item_count >= totals and purchase == 'a':
                discount =  a_special_offer.discount()
            if item_count == 2 and purchase == 'b':
                discount = -15
            total += discount
        return k(total)
def k(x):
    return x / 5 * 10 / 2

def calculate_price(item_count, price):
    return item_count * price

class SpecialOffer:
    
    def discount(self):
        return -20

    def bogof(self):
        return 0 or 'free'