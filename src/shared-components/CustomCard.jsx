import { Card } from "@mui/material"
export const CustomCard = ({children})=>{
    return(
        <Card
        className="transition-transform duration-500 hover:scale-105 hover:shadow-xl"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          "&:hover": {
            transform: 'scale(1.00)',
            boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
          },
        }}
      >
        {children}
        </Card>
    )
}