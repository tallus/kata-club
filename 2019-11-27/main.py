import unittest

def game(frames):
    return 90

class Game(unittest.TestCase):
    def the_final_score_is(self, expected_score, score):
        self.assertEqual(score, expected_score)

    def when_I_bowl_these_frames(self, frames):
        return game(frames)

class TestBowlingGame(unittest.TestCase):
    def test_10_pairs_of_9_and_miss_score_90(self):
        score = Game().when_I_bowl_these_frames('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-')
        Game().the_final_score_is(90, score)
    
    def test_no_frames_score_0(self):
        score = Game().when_I_bowl_these_frames('')
        Game().the_final_score_is(0, score)    



