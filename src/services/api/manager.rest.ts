import axios, {AxiosError, AxiosResponse, Method} from 'axios';

class ApiManager {
  private route = '' as string;
  private method = 'GET' as Method;
  private params = '' as string;

  public addParams(params: string) {
    this.params = params;
    return this;
  }

  public addRoute(endpoint: string) {
    this.route = endpoint;
    return this;
  }

  public post() {
    this.method = 'POST';
    return this;
  }

  public get() {
    this.method = 'GET';
    return this;
  }

  public put() {
    this.method = 'PUT';
    return this;
  }

  public delete() {
    this.method = 'DELETE';
    return this;
  }

  public send(): unknown {
    return new Promise((resolve, reject) => {
      axios({
        url: `${this.route}${this.params}`,
        method: this.method,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.message);
        });
    });
  }
}

export default ApiManager;
