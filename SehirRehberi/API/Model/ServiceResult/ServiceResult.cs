using Model.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Model.ServiceResult
{
    public class ServiceResult
    {
        public ServiceResultStates State { get; set; }
        public string Message { get; set; }
        public IEntity Entity { get; set; }
    }

    public class ServiceResult<T> : ServiceResult where T : class
    {
        public ServiceResult() { }

        public ServiceResult(T result, string message = "", ServiceResultStates state = ServiceResultStates.SUCCESS)
        {
            Result = result;
            State = state;
            Message = message;
        }

        public ServiceResult(List<T> results, string message = "", ServiceResultStates state = ServiceResultStates.SUCCESS)
        {
            ResultList = results;
            State = state;
            Message = message;
        }

        public T Result { get; set; }
        public List<T> ResultList { get; set; }
    }

    public enum ServiceResultStates
    {
        SUCCESS=1,
        FAIL=2,
        WARNING=3,
        INFO=4,
        ERROR=5
    }
}
