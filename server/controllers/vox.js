const express = require('express');
const router = express.Router();
const axios = require('axios')
const Article = require('../models/article')
const cheerio = require('cheerio')

 const techURL = "https://www.vox.com/technology"
 const climateURL = "https://www.vox.com/climate"
 const healthURL = "https://www.vox.com/health"
 const scienceURL = "https://www.vox.com/science"
 const cultureURL = "https://www.vox.com/culture"
 const mainURL = "https://www.vox.com/"

 router.get('/:num', (req, res) => {
    Article.find({createdby: "Vox"}).limit(req.params.num)
    .then(response => {
        res.json({response: response})
    })
})

 router.post('/main', (req, res) => {
    axios(mainURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.c-compact-river__entry', html).each(function () { //<-- cannot be a function expression
                const url = $(this).find("a").attr('href')
                const title = $(this).find("h2").find("a").text()
                articles.push({
                    title,
                    url,
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    url: a.url,
                    eyebrow: "Misc",
                    createdby: "Vox",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})


router.post('/tech', (req, res) => {
    axios(techURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.c-compact-river__entry', html).each(function () { //<-- cannot be a function expression
                const url = $(this).find("a").attr('href')
                const title = $(this).find("h2").find("a").text()
                articles.push({
                    title,
                    url,
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    url: a.url,
                    eyebrow: "Tech",
                    createdby: "Vox",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/climate', (req, res) => {
    axios(climateURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.c-compact-river__entry', html).each(function () { //<-- cannot be a function expression
                const url = $(this).find("a").attr('href')
                const title = $(this).find("h2").find("a").text()
                articles.push({
                    title,
                    url,
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    url: a.url,
                    eyebrow: "Climate",
                    createdby: "Vox",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/health', (req, res) => {
    axios(healthURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.c-compact-river__entry', html).each(function () { //<-- cannot be a function expression
                const url = $(this).find("a").attr('href')
                const title = $(this).find("h2").find("a").text()
                articles.push({
                    title,
                    url,
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    url: a.url,
                    eyebrow: "Health",
                    createdby: "Vox",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/culture', (req, res) => {
    axios(cultureURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.c-compact-river__entry', html).each(function () { //<-- cannot be a function expression
                const url = $(this).find("a").attr('href')
                const title = $(this).find("h2").find("a").text()
                articles.push({
                    title,
                    url,
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    url: a.url,
                    eyebrow: "Culture",
                    createdby: "Vox",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

router.post('/science', (req, res) => {
    axios(scienceURL)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.c-compact-river__entry', html).each(function () { //<-- cannot be a function expression
                const url = $(this).find("a").attr('href')
                const title = $(this).find("h2").find("a").text()
                articles.push({
                    title,
                    url,
                })
                
            })
            articles.map((a) => {
                Article.create({
                    title: a.title,
                    url: a.url,
                    eyebrow: "Science",
                    createdby: "Vox",
                })
            })
        res.json(articles)
        }).catch(err => console.log(err))

})

 module.exports = router;
