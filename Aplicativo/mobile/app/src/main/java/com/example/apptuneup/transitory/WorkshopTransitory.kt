package com.example.apptuneup.transitory

import android.os.Parcelable
import java.io.Serializable


open class WorkshopTransitory:Serializable {

//(var nome:String,var razaoSocial:String,var ie:String,var cnpj:String,var cep:String,var rua:String,var bairro:String,var numero:Int,var complemento:String,var telefone:String,var email:String,var fkPrope:Int)
//    fun constructor(nome:String, razaoSocial:String,ie:String,cnpj:String,cep:String,rua:String,bairro:String, numero:Int,complemento:String, telefone:String, email:String, fkPrope:Int) {
//        this.nome = nome
//        this.razaoSocial = razaoSocial
//        this.ie  = ie
//        this.cnpj =cnpj
//        this.cep =cep
//        this.rua =rua
//        this.bairro =bairro
//        this.numero =numero
//        this.complemento =complemento
//        this.telefone =telefone
//        this.email =email
//    }

    var nome:String = "name_workshop"
        get() = field
        set(value) {field = value}
    var razaoSocial:String = "corporate_name_workshop"
        get() = field
        set(value) {field = value}
    var ie:String = "IE_workshop"
        get() = field
        set(value) {field = value}
    var cnpj:String = "cnpj_workshop"
        get() = field
        set(value) {field = value}
    var cep:String = "cep_workshop"
        get() = field
        set(value) {field = value}
    var rua:String = "rua_workshop"
        get() = field
        set(value) {field = value}
    var bairro:String = "bairro_workshop"
        get() = field
        set(value) {field = value}
    var numero:Int = 0
        get() = field
        set(value) {field = value}
    var complemento:String = "complemento_workshop"
        get() = field
        set(value) {field = value}
    var telefone:String = "telefone_workshop"
        get() = field
        set(value) {field = value}
    var email:String = "email_workshop"
        get() = field
        set(value) {field= value}
    var fkPrope:Int = 0
        get() = field
        set(value) {field = value}

    override fun toString(): String {
        return "WorkshopTransitory(nome='$nome', razaoSocial='$razaoSocial', ie='$ie', cnpj='$cnpj', cep='$cep', rua='$rua', bairro='$bairro', numero=$numero, complemento='$complemento', telefone='$telefone', email='$email', fkPrope=$fkPrope)"
    }

}