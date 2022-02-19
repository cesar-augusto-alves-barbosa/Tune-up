package com.example.apptuneup.model

import java.time.LocalDate
import java.util.*

data class RegisterOwner(val nome:String, val email:String, val cpf:String, val dataNasc:String, val telefone:String, val senha:String, val nivelAcesso:Int)
