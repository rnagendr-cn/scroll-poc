import VogueAvantGardeBold from "../assets/fonts/VogueAvantGarde-Bold.otf"
import VogueAvantGardeBook from "../assets/fonts/VogueAvantGarde-Book.otf"
import VogueAvantGardeDemiBold from "../assets/fonts/VogueAvantGarde-DemiBold.otf"
import VogueAvantGardeMedium from "../assets/fonts/VogueAvantGarde-Medium.otf"
import FBDidotS from "../assets/fonts/FBDidotS-Regular.woff"
import GaramondPremierPro from "../assets/fonts/Garamondpro-regular.woff"

const fonts = {
  "@font-face": [
    {
      fontFamily: "VogueAvantGarde",
      src: `url('${VogueAvantGardeBold}') format("opentype")`,
      fontStyle: "normal",
      fontWeight: 700,
      fontDisplay: "swap",
    },
    {
      fontFamily: "VogueAvantGarde",
      src: `url('${VogueAvantGardeBook}') format("opentype")`,
      fontStyle: "normal",
      fontWeight: 350,
      fontDisplay: "swap",
    },
    {
      fontFamily: "VogueAvantGarde",
      src: `url('${VogueAvantGardeDemiBold}') format("opentype")`,
      fontStyle: "normal",
      fontWeight: 600,
      fontDisplay: "swap",
    },
    {
      fontFamily: "VogueAvantGarde",
      src: `url('${VogueAvantGardeMedium}') format("opentype")`,
      fontStyle: "normal",
      fontWeight: 500,
      fontDisplay: "swap",
    },
    {
      fontFamily: "FBDIDOTS",
      src: `url('${FBDidotS}') format("opentype")`,
      fontStyle: "normal",
      fontWeight: 100,
      fontDisplay: "swap",
    },
    {
      fontFamily: "GaramondPremierPro",
      src: `url('${GaramondPremierPro}') format("opentype")`,
      fontStyle: "normal",
      fontWeight: 400,
      fontDisplay: "swap",
    },
  ],
}
export default fonts
