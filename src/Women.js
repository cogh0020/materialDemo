import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

function Women({data}){
  if (data.length === 0)return null
  else {
    let result = data.filter(obj => obj.category === "women's clothing")
    return(
      <Grid container spacing={ 2 }>
        {result.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Paper elevation={3} className="paper">
              <img src={item.image} alt="" className="img" />
              <Rating name="disabled" value={item.rating.rate} disabled />
              <Typography variant="body1" gutterBottom> {item.title}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default Women