const express = require('express')()
const jwt = require('jsonwebtoken')

const token = jwt.sign({usuario:"aaaa"},"secreto", { expiresIn: "2 min"})

console.log(token)


resultado = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiYWFhYSIsImlhdCI6MTY1NjAxNTQwMiwiZXhwIjoxNjU2MDE1NTIyfQ.higgv1MGaPjk3rhHmKfMjbr6P169rKOTCUE0n3saR_s", "secreto")

console.log(resultado)

