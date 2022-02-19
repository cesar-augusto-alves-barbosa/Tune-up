package com.example.apptuneup.db

import android.content.ContentValues
import android.content.Context
import android.database.Cursor
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper
<<<<<<< HEAD
import com.example.apptuneup.model.Login
=======
import com.example.apptuneup.model.FkProp
import com.example.apptuneup.models.Login
>>>>>>> edaec643b73b27cbbf83c63d789a54eea75ede73

class DatabaseHandler(ctx: Context) : SQLiteOpenHelper(ctx, DB_NAME, null, DB_VERSION) {

    override fun onCreate(db: SQLiteDatabase?) {
        val CREATE_TABLE =
            "CREATE TABLE $TABLE_NAME ($ID INTEGER PRIMARY KEY, $SERIAL TEXT, $EMAIL TEXT, $SENHA TEXT);"
        db?.execSQL(CREATE_TABLE)
    }

    override fun onUpgrade(db: SQLiteDatabase?, p1: Int, p2: Int) {
        val DROP_TABLE = "DROP TABLE IF EXISTS $TABLE_NAME;"
        db?.execSQL(DROP_TABLE)
        onCreate(db)
    }

    fun addLogin(login: Login) {
        val db = writableDatabase
        val values = ContentValues().apply {
            put(SERIAL, login.serial)
            put(EMAIL, login.email)
            put(SENHA, login.senha)
        }
        db.insert(TABLE_NAME, null, values)
    }

    fun getLogin(id: Int): Login {
        val db = readableDatabase
        val selectQuery = "SELECT * FROM $TABLE_NAME WHERE $ID = $id"
        val cursor = db.rawQuery(selectQuery, null)
        cursor?.moveToFirst()
        val login = populateLogin(cursor)
        cursor.close()
        return login
    }

    fun getLoginBySerial(serial: String): Login {
        val db = readableDatabase
        val selectQuery = "SELECT * FROM $TABLE_NAME WHERE $SERIAL = '$serial'"
        val cursor = db.rawQuery(selectQuery, null)
        if (cursor != null) {
            cursor?.moveToFirst()
            val login = populateLogin(cursor)
            cursor.close()
            return login
        }
        val login = Login(0,"","","")
        println("SEM REGISTROS")
        return login
    }

    //lista de login

    fun getLoginList(): ArrayList<Login> {
        val loginList = ArrayList<Login>()
        val db = readableDatabase
        val selectQuery = "SELECT * FROM $TABLE_NAME ORDER BY $EMAIL"
        val cursor = db.rawQuery(selectQuery, null)
        if (cursor != null) {
            if (cursor.moveToFirst()) {
                do {
                    val login = populateLogin(cursor)
                    loginList.add(login)
                } while (cursor.moveToNext())
            }
        }
        cursor.close()
        return loginList
    }

    //atualizando login

    fun updateLogin(login: Login) {
        val db = writableDatabase
        val values = ContentValues().apply {
            put(SERIAL, login.serial)
            put(EMAIL, login.email)
            put(SENHA, login.senha)
        }
        db.update(TABLE_NAME, values, "$ID = ?", arrayOf(login.id.toString()))
    }

    //DELETANDO LOGIN

    fun delLogin(id: Int) {
        val db = writableDatabase
        db.delete(TABLE_NAME, "$ID = ?", arrayOf(id.toString()))
    }

    //procurar

    fun searchLogin(str: String): ArrayList<Login> {
        val loginList = ArrayList<Login>()
        val db = readableDatabase
        val selectQuery = "SELECT * FROM $TABLE_NAME WHERE $EMAIL LIKE '%$str%' ORDER BY $EMAIL"
        val cursor = db.rawQuery(selectQuery, null)
        if (cursor != null) {
            if (cursor.moveToFirst()) {
                do {
                    val login = populateLogin(cursor)
                    loginList.add(login)
                } while (cursor.moveToNext())
            }
        }
        cursor.close()
        return loginList
    }

    //populando login
    fun populateLogin(cursor: Cursor): Login {
        val login = Login()
        login.id = cursor.getInt(cursor.getColumnIndex(ID))
        login.serial = cursor.getString(cursor.getColumnIndex(SERIAL))
        login.email = cursor.getString(cursor.getColumnIndex(EMAIL))
        login.senha = cursor.getString(cursor.getColumnIndex(SENHA))
        return login
    }

    companion object {
        private val DB_VERSION = 1
        private val DB_NAME = "ems"
        private val TABLE_NAME = "tbl_login"
        private val ID = "id"
        private val SERIAL = "serial"
        private val EMAIL = "email"
        private val SENHA = "senha"
    }
}