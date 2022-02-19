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
import androidx.fragment.app.FragmentTransaction
import com.example.apptuneup.R

class OrderHistoryFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val fragmentOrder =  inflater.inflate(R.layout.fragment_order_history, container, false)

        val relativelRedirect = fragmentOrder.findViewById<View>(R.id.vw_close_hitory_order)
        relativelRedirect.setOnClickListener {
            val historyFragment = HistoryFragment()
            val transaction: FragmentTransaction = childFragmentManager.beginTransaction()
            transaction.replace(R.id.rl_screen_order_history, historyFragment)
            transaction.commit()
        }
        return fragmentOrder
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        val menu_option = view.findViewById<ImageView>(R.id.iv_menu_history_order)
        super.onViewCreated(view, savedInstanceState)

        menu_option.setOnClickListener {
            val popupMenu = PopupMenu(context, it)
            popupMenu.setOnMenuItemClickListener { item ->
                when(item.itemId) {
                    R.id.menu_pdf -> {
                        val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://google.com.br"))
                        startActivity(intent)
                        true
                    }

                    R.id.menu_qrcode -> {
                        Toast.makeText(context, "QRCode gerado com sucesso", Toast.LENGTH_LONG).show()
                        true
                    }
                    else -> false
                }
            }

            popupMenu.inflate(R.menu.pdf_qrcode_menu)

            try {
                val fieldMPopup = PopupMenu::class.java.getDeclaredField("mPopup")
                fieldMPopup.isAccessible = true
                val mPopup = fieldMPopup.get(popupMenu)
                mPopup.javaClass
                    .getDeclaredMethod("setForceShowIcon", Boolean::class.java)
                    .invoke(mPopup, true)
            } catch (e: Exception) {
                Log.e("ClientDetailsNoPlaceholderActivity", "Error showing menu icons.", e)
            }

            popupMenu.show()
        }
    }

}