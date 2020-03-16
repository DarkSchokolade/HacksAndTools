import scrapy

class QuoteSpider(scrapy.Spider):
    name = 'firstSpider'
    start_urls =[
        'http://quotes.toscrape.com'
    ]

    def parse(self, response):
        # title = response.css('title::text').extract()
        # yield {'titletext': title}

        all_div_quotes = response.css('div.quote')

        for q in all_div_quotes:
            quotes = q.css('.text::text').extract()
            authors = q.css('.author::text').extract()
            tags = q.css('.tag::text').extract()
            yield {
                'quotes':quotes,
                'author':authors,
                'tags':tags,
            }