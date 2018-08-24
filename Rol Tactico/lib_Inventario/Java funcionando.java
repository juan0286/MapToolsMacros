import java.io.ByteArrayInputStream;
import java.io.InputStream;

import javax.xml.soap.MessageFactory;
import javax.xml.soap.SOAPBody;
import javax.xml.soap.SOAPConnection;
import javax.xml.soap.SOAPConnectionFactory;
import javax.xml.soap.SOAPElement;
import javax.xml.soap.SOAPEnvelope;
import javax.xml.soap.SOAPMessage;
import javax.xml.soap.SOAPPart;
import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamResult;

/**
 * SOAP Client Implementation using SAAJ Api.
 */
public class SaaJSoapClient {
   /**
    * Method used to create the SOAP Request
    */
   private static SOAPMessage createSOAPRequest() throws Exception {
      MessageFactory messageFactory = MessageFactory.newInstance();
      // SOAPMessage soapMessage = messageFactory.createMessage();

      String xmlInput = "<s11:Envelope xmlns:s11='http://schemas.xmlsoap.org/soap/envelope/'>"
            + "<s11:Body>"
            + "<ns1:getBank xmlns:ns1='http://thomas-bayer.com/blz/'>"
            + "  <ns1:blz>30150001</ns1:blz>"
            + "</ns1:getBank>"
            + "</s11:Body>" + "  </s11:Envelope>";
      InputStream is = new ByteArrayInputStream(xmlInput.getBytes());
      SOAPMessage request = MessageFactory.newInstance().createMessage(null,
            is);

      // Check the input
      System.out.println("Request SOAP Message = ");
      request.writeTo(System.out);
      System.out.println();
      return request;
   }

   /**
    * Method used to print the SOAP Response
    */
   private static void printSOAPResponse(SOAPMessage soapResponse)
         throws Exception {
      TransformerFactory transformerFactory = TransformerFactory
            .newInstance();
      Transformer transformer = transformerFactory.newTransformer();
      Source sourceContent = soapResponse.getSOAPPart().getContent();
      System.out.println("\nResponse SOAP Message = ");
      StreamResult result = new StreamResult(System.out);
      transformer.transform(sourceContent, result);
   }

   /**
    * Starting point for the SAAJ - SOAP Client Testing
    */
   public static void main(String args[]) {
      try {
         // Create SOAP Connection
         SOAPConnectionFactory soapConnectionFactory = SOAPConnectionFactory
               .newInstance();
         SOAPConnection soapConnection = soapConnectionFactory
               .createConnection();

         // Send SOAP Message to SOAP Server
         String url = "http://www.thomas-bayer.com/axis2/services/BLZService";
         SOAPMessage soapResponse = soapConnection.call(createSOAPRequest(),
               url);

         // Process the SOAP Response
         printSOAPResponse(soapResponse);

         soapConnection.close();
      } catch (Exception e) {
         System.err
               .println("Error occurred while sending SOAP Request to Server");
         e.printStackTrace();
      }
   }
}