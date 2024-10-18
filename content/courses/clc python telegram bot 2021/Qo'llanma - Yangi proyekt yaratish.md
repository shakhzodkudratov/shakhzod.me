1. Papka yaratish va ichiga kirish
    
    ![[Pasted image 20240927181151.png]]
    
2. virtual environment(virtual muhit) yaratamiz
    
    - `python -m venv venv` ← Pythonning o'zini moduli
        
        — Yoki
        
    - `pip install virtualenv`
        
    - `virtualenv venv` ← Community(Jamiyat)'dan modul
        
    
    ![[Pasted image 20240927181204.png]]
    
3. virtual environment'ni aktivlashtirish
    
    - Windows:
        - `.\\venv\\Scripts\\activate.bat`
    - Linux / Mac:
        - `source ./venv/bin/activate`
    
    ![[Pasted image 20240927181224.png]]
    
    virtual environment aktivlashtirilgandan so'ng, (name) degan prefiks chiqadi. Aks holda qayta urunib ko'ring
    
4. Python Telegram Bot kutubxonasini o'rnatish `pip install python-telegram-bot`
    
    <aside> ⚠️ `pip` orqali har qanday o'rnatilgan kutubxonadan so'ng, `requirements.txt` ga uni saqlash esdan chiqmasin: `pip freeze > requirements.txt`
    
    </aside>