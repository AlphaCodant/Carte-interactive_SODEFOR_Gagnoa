function ajoutVariables(e){
    const doc = DocumentApp.openById("1Vxm70p2558pFfpK_EyjtIEeucnmtjGoKJTa9ThZZqdA");
    const corps = doc.getBody();
    const elementCible = corps.findText("Centre de gestion :");
    const entete = elementCible.getElement();
    entete.setText("Centre de gestion : ${ville}");
}