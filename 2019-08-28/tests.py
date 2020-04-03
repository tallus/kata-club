import unittest

class OrderedJobs:

	def extract_job(self, job):
		return job.replace('=>', '').replace('\t', '').replace(' ', '').strip()

	def separate_jobs(self, jobs):
		return jobs.split('\n')

	def jobs_to_map(self, jobs):
		result = {}
		for job in self.separate_jobs(jobs):
			parsed_job = self.extract_job(job)
			if len(parsed_job) > 1:
				result[parsed_job[0]] = parsed_job[1]
			else:
				result[parsed_job] = None
		return result

	def order_jobs(self, job_map):
		


	def order(self, jobs):
		if jobs:
			job_map = self.jobs_to_map(jobs)
			self.order_jobs(job_map)
		return []

class OrderedJobsTests(unittest.TestCase):

	def test_empty_string_returns_no_jobs(self):
		result = OrderedJobs().order("")
		self.assertEqual(result, [])

	def test_single_job_with_no_dependencies(self):
		result = OrderedJobs().order('a =>')
		self.assertEqual(result, ['a'])

	def test_has_3_elements(self):
		result = OrderedJobs().order('''a => 
			b => 
			c =>''')
		self.assertEqual(len(result), 3)

	def test_has_all_three_elements(self):
		result = OrderedJobs().order('''a => 
			b => 
			c =>''')
		self.assertEqual(set(result), set(['a', 'b', 'c']))

	def test_job_with_one_dependency(self):
		result = OrderedJobs().order('''a => b
		b =>''')
		self.assertEqual(result, ['b', 'a'])

	




