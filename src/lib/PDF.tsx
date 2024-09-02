import {
  Document,
  Text,
  Page,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: "auto",
  },
  textContainer: {
    position: "absolute",
    top: -250,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    fontWeight: "semibold",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 15,
    textTransform: "capitalize",
  },
});

const PDF = ({ nombre }: { nombre: string }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image
            style={styles.image}
            src="/invitacion-colacion/images/invitacion.png"
          />

          <View style={styles.textContainer}>
            <Text style={styles.text}>{nombre}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
