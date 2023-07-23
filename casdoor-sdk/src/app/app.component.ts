import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { CasdoorService } from './casdoor.service';
import {NgForm} from '@angular/forms';
import Sdk from "casdoor-js-sdk";
const config = {
  serverUrl: "https://door.casdoor.com",
  clientId: "014ae4bd048734ca2dea",
  organizationName: "casbin",
  appName: "app-casnode",
  redirectPath: "/callback",
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  username=''
  loading = false
  signInForm = this.formBuilder.group({
    email: '',
  })
  constructor(
    private sdk: Sdk,
    private readonly formBuilder: FormBuilder
  ) {
  }
  async onSubmit(): Promise<void> {
    this.sdk.signin('http://localhost:8000/').then((res) => {

      return fetch(`http://localhost:8080/api/getUserInfo?token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImNlcnQtYnVpbHQtaW4iLCJ0eXAiOiJKV1QifQ.eyJvd25lciI6ImJ1aWx0LWluIiwibmFtZSI6ImFkbWluIiwiY3JlYXRlZFRpbWUiOiIyMDIzLTAzLTI5VDAyOjAxOjQwKzA4OjAwIiwidXBkYXRlZFRpbWUiOiIiLCJpZCI6ImEwNGJjNmQ3LTk2NTUtNDJjNy05YzU0LTNlNDcxMDQ0Yjk3OCIsInR5cGUiOiJub3JtYWwtdXNlciIsInBhc3N3b3JkIjoiIiwicGFzc3dvcmRTYWx0IjoiIiwiZGlzcGxheU5hbWUiOiJBZG1pbiIsImZpcnN0TmFtZSI6IiIsImxhc3ROYW1lIjoiIiwiYXZhdGFyIjoiaHR0cHM6Ly9jZG4uY2FzYmluLm9yZy9pbWcvY2FzYmluLnN2ZyIsInBlcm1hbmVudEF2YXRhciI6IiIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJlbWFpbFZlcmlmaWVkIjpmYWxzZSwicGhvbmUiOiIxMjM0NTY3ODkxMCIsImxvY2F0aW9uIjoiIiwiYWRkcmVzcyI6W10sImFmZmlsaWF0aW9uIjoiRXhhbXBsZSBJbmMuIiwidGl0bGUiOiIiLCJpZENhcmRUeXBlIjoiIiwiaWRDYXJkIjoiIiwiaG9tZXBhZ2UiOiIiLCJiaW8iOiIiLCJyZWdpb24iOiIiLCJsYW5ndWFnZSI6IiIsImdlbmRlciI6IiIsImJpcnRoZGF5IjoiIiwiZWR1Y2F0aW9uIjoiIiwic2NvcmUiOjIwMDAsImthcm1hIjowLCJyYW5raW5nIjoxLCJpc0RlZmF1bHRBdmF0YXIiOmZhbHNlLCJpc09ubGluZSI6ZmFsc2UsImlzQWRtaW4iOnRydWUsImlzR2xvYmFsQWRtaW4iOnRydWUsImlzRm9yYmlkZGVuIjpmYWxzZSwiaXNEZWxldGVkIjpmYWxzZSwic2lnbnVwQXBwbGljYXRpb24iOiJhcHAtYnVpbHQtaW4iLCJoYXNoIjoiIiwicHJlSGFzaCI6IiIsImNyZWF0ZWRJcCI6IjEyNy4wLjAuMSIsImxhc3RTaWduaW5UaW1lIjoiIiwibGFzdFNpZ25pbklwIjoiIiwibGRhcCI6IiIsInByb3BlcnRpZXMiOnt9LCJyb2xlcyI6W3sib3duZXIiOiJoYXN1cmEiLCJuYW1lIjoidXNlciIsImNyZWF0ZWRUaW1lIjoiMjAyMy0wNC0wOVQxNTo0MTozOCswODowMCIsImRpc3BsYXlOYW1lIjoidXNlciIsInVzZXJzIjpudWxsLCJyb2xlcyI6WyJidWlsdC1pbi9yb2xlX3duODR5ayJdLCJkb21haW5zIjpbXSwiaXNFbmFibGVkIjp0cnVlfV0sInBlcm1pc3Npb25zIjpbXSwibGFzdFNpZ25pbldyb25nVGltZSI6IjIwMjMtMDUtMTRUMTg6MTQ6MjJaIiwic2lnbmluV3JvbmdUaW1lcyI6MCwidG9rZW5UeXBlIjoiYWNjZXNzLXRva2VuIiwibm9uY2UiOiJkLXhiMkpVbmZzRlZha0lYeFM1WGk0T09DcGdDVXo3VG1WVEU2MjFkX2JvIiwidGFnIjoic3RhZmYiLCJzY29wZSI6Im9wZW5pZCIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCIsInN1YiI6ImEwNGJjNmQ3LTk2NTUtNDJjNy05YzU0LTNlNDcxMDQ0Yjk3OCIsImF1ZCI6WyJlMzI0ZjlhM2Y1NWUxYWRhYzRlZiJdLCJleHAiOjE2ODU0NzI3OTEsIm5iZiI6MTY4NDg2Nzk5MSwiaWF0IjoxNjg0ODY3OTkxLCJqdGkiOiJhZG1pbi81Zjk2ZjQ4Ni04NzE0LTRmZmYtOGI0Ni0zNzQyMDBmNWQyM2QifQ.Tfl5tan6p2wS-mBAyGWL-mzrPLAxD0MiKgUQS1eyeH3-xfT4fq_UPWjbRSK_-vcY8HoI1WPv3OrDSmmXeCGbTVNDfmvQmsPWblL94MISNRfJ5MJi6w7P7kmlZjON_gEvi8alXuOLG0mrQcTqJiGcgHfzQ63U7Mxz9ozRku449jrbiECArTGQ0jHo_jy17WoD7xzdbSE64pisq_oEeJh8VUDQtbGpgFa_fBrdWuZKOEf7hvjyV4EMT1haao4kFVNeEs8l5xhoG794GtJJ-uuZYpS3Blt5DCE20ZQtsdCxPQL1rP1TWZMJcUzMDLTxFXNwFC4uqQ5HTcC_bKEAmmi0kIsfIHkN9A9aVKjmgOgEEvmxvZBDrdFvJmOkKroPlP0sZIiSwsfVVzLsPUk-bOVdyiGPQ83wVWpElV2N-zhNOs2W8opDDOx5sZNRimN-flrr-8x8qoeLQe7gzMVGcRjZqFWZzDjzQKQ4KpzfswTeOkU6Esmq_xU6fXm_-7QIBqebTVRt6wX7YCRZuLE6cXvaW12vLTKHfFOWYUJY-INaFpDIym_OBuciCrTt06uqI-fEJASHKMd9oC-6YUu4yZ-asMZhqbMun4rGDAOwA0zdy5wQfJL0QAukuiNXRqciY1tM5oBxSyblI4irzuSmgNbHlhP3uqGzeWgHI0smVCZT_bA`, {
        method: 'GET',
        credentials: 'include',
      }).then(res => {
        console.log(res)
        return res.json()
      });
    });
  }

}
