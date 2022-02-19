package com.example.apptuneup.fragments

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.PopupMenu
import android.widget.Toast
import com.example.apptuneup.R

class VisualizationOrderFragment : Fragment() {
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_visualization_order, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        val menu_option = view.findViewById<ImageView>(R.id.iv_menu_view_view_order)
        super.onViewCreated(view, savedInstanceState)

        menu_option.setOnClickListener {
            val popupMenu = PopupMenu(context, it)
            popupMenu.setOnMenuItemClickListener { item ->
                when(item.itemId) {
                    R.id.menu_edit -> {
                        // Trocar Função para troca de tela CreateNewOrder
                        val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://google.com.br"))
                        startActivity(intent)
                        true
                    }

                    R.id.menu_delete -> {
                        Toast.makeText(context, "Deletado com sucesso", Toast.LENGTH_LONG).show()
                        true
                    }
                    else -> false
                }
            }

            popupMenu.inflate(R.menu.edit_delete_menu)

            try {
                val fieldMPopup = PopupMenu::class.java.getDeclaredField("mPopup")
                fieldMPopup.isAccessible = true
                val mPopup = fieldMPopup.get(popupMenu)
                mPopup.javaClass
                    .getDeclaredMethod("setForceShowIcon", Boolean::class.java)
                    .invoke(mPopup, true)
            } catch (e: Exception) {
                Log.e("VisualizationOrderFragment", "Error showing menu icons.", e)
            }

            popupMenu.show()
        }
    }
}