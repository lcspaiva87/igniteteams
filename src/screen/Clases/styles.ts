import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
`

export const Title = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.COLORS.WHITE};
  font-weight: bold;
  margin-top: 10px;
`
export const SubTitle = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.COLORS.GRAY_300};
  font-weight: normal;
  margin-top: 10px;
`
export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.COLORS.GRAY_500};
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 380px;
  height: 90px;
  gap: 24px;
`

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.COLORS.WHITE};
  font-size: 18px;
  font-weight: normal;
`
