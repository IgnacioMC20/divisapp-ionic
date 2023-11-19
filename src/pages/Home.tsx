import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem, IonLabel, IonText } from '@ionic/react';

const HomePage: React.FC = () => {
  const [quetzales, setQuetzales] = useState<number>(0);
  const [resultado, setResultado] = useState<number | null>(null);

  const convertir = () => {
    const tipoCambio = 8; // 8 quetzales por dólar
    const equivalente = quetzales / tipoCambio;
    setResultado(equivalente);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DivisApp 22006220</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Cantidad en Quetzales</IonLabel>
          <IonInput type="number" value={quetzales} onIonChange={(e) => setQuetzales(parseFloat(e.detail.value!))}></IonInput>
        </IonItem>
        <IonButton expand="block" onClick={convertir}>Convertir a Dólares</IonButton>
        {resultado !== null && (
          <IonItem>
            <IonLabel>Equivalente en Dólares:</IonLabel>
            <IonText>{resultado}</IonText>
          </IonItem>
        )}
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
