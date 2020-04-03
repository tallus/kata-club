def roman_numeral(integer):
    if integer == 4:
        return numeral_list[integer]
    
    x = integer % 5
    y = integer // 5
    return 'V' * y + x * 'I'

numeral_list = {
    1:'I',
    2:'II',
    4:'IV'
}